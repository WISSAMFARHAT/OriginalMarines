using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OriginalMarines.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult category(string name)
        {
            ViewBag.name = name;
            return View();
        }

        public ActionResult item()
        {
            
            return View();
        }

        public ActionResult cart()
        {

            return View();
        }

        public ActionResult whishlist()
        {

            return View();
        }

        public ActionResult checkout()
        {

            return View();
        }

    }
}