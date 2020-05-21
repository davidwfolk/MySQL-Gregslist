using System;
using System.ComponentModel.DataAnnotations;

namespace fullstack_gregslist.Models
{
  public class House
  {
    public int Id { get; set; }
    public string UserId { get; set; }
    [Required]
    public string Bedrooms { get; set; }
    [Required]
    public string Bathrooms { get; set; }
    [Required]
    public int YearBuilt { get; set; }
    [Required]
    public int Price { get; set; }
    [Required]
    public string ImgUrl { get; set; }
    [Required]
    public string Body { get; set; }
  }
}