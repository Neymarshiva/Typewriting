using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Serilog.Context;
using TypeWriting.Application.Common.Models;

namespace TypeWriting.Application.Common.Behaviours;
internal sealed class RequestLoggingPipelineBehavior<TRequest, TResponse>
    : IPipelineBehavior<TRequest, TResponse>
    where TRequest : class
    where TResponse : Result
{
    private readonly ILogger _logger;

    public RequestLoggingPipelineBehavior(ILogger logger)
    {
        _logger = logger;
    }

    public async Task<TResponse> Handle(
        TRequest request,
        RequestHandlerDelegate<TResponse> next,
        CancellationToken cancellationToken)
    {
        string requestName = typeof(TRequest).Name;

        _logger.LogInformation(
            "Processing request {RequestName}", requestName);

        TResponse result = await next();

        if (result.Succeeded)
        {
            _logger.LogInformation(
                "Completed request {RequestName}", requestName);
        }
        else
        {
            using (LogContext.PushProperty("Error", result.Errors, true))
            {
                _logger.LogError(
                    "Completed request {RequestName} with error", requestName);
            }
        }

        return result;
    }
}
