using System;
using System.Collections.Generic;
using fullstack_gregslist.Models;
using fullstack_gregslist.Repositories;

namespace fullstack_gregslist.Controllers
{
  public class HousesService
  {
    private readonly HousesRepository _repo;

    public HousesService(HousesRepository repo)
    {
      _repo = repo;
    }

    internal House Create(House newHouse)
    {
      return _repo.Create(newHouse);
    }

    internal IEnumerable<House> GetAll()
    {
      return _repo.GetAll();
    }
    public House GetById(int id)
    {
      House foundHouse = _repo.GetById(id);
      if (foundHouse == null)
      {
        throw new Exception("Invalid Id");
      }
      return foundHouse;
    }

    internal string Delete(int id, string userId)
    {
      House foundHouse = GetById(id);
      if (foundHouse.UserId != userId)
      {
        throw new Exception("This is not your House!");
      }
      if (_repo.Delete(id, userId))
      {
        return "Sucessfully delorted.";
      }
      throw new Exception("Somethin bad happened");
    }
  }
}