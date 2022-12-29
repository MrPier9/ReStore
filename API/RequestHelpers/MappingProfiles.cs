using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.RequestHelpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<CreatesProductDto, Product>();
            CreateMap<UpdateProductDto, Product>();
        }
    }
}