using System.Web.Http;

namespace AngularLearning
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);

            GlobalConfiguration.Configure(config =>
            {
                config.Formatters.Remove(config.Formatters.XmlFormatter);
            });

            AutoMapperConfiguration.RegisterMappings();
        }
    }
}
