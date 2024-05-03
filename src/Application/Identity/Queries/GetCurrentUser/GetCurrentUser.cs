using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeWriting.Application.Common.Interfaces;
namespace TypeWriting.Application.Identity.Queries.GetCurrentUser;
public record GetCurrentUserQuery :IRequest<CurrentUserDto>;


public class GetCurrentUserQueryHandler : IRequestHandler<GetCurrentUserQuery, CurrentUserDto>
{ 
    private readonly IMapper _mapper;
    private readonly IUser _user;

    public GetCurrentUserQueryHandler(IMapper mapper, IUser user)
    {         
        _mapper = mapper;
        _user = user;
    }

    public async Task<CurrentUserDto> Handle(GetCurrentUserQuery request, CancellationToken cancellationToken)
    {
        var currentUser = new CurrentUserDto()
        {            
            UserName = _user.UserName ,
            Email = _user.Email,
            PhoneNumber = _user.PhoneNumber,
            CompanyName = _user.CompanyName,
            CountryCulture = _user.CountryCulture,
            State = _user.State
        };
       return await Task.FromResult(currentUser);
    }
}
