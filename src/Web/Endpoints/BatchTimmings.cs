using TypeWriting.Application.BatchTimmings.Queries.GetBatchTimmings;
using TypeWriting.Application.Machine.Queries.GetMachines;

namespace TypeWriting.Web.Endpoints;

public class BatchTimmings : EndpointGroupBase
{
    public override void Map(WebApplication app)
    {
        app.MapGroup(this)
            .RequireAuthorization()
            .MapGet(GetBatchTimmings);
    }

    public async Task<List<BatchTimmingsDto>> GetBatchTimmings(ISender sender)
    {
        return await sender.Send(new GetBatchTimmingsQuery());
    }

}
