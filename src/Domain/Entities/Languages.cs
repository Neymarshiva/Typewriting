using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TypeWriting.Domain.Entities;
public class Languages : BaseAuditableEntity
{ 
    public string LanuagesType { get; set; } = string.Empty;
    public IList<Machines> Machines { get; private set; } = new List<Machines>();
}
