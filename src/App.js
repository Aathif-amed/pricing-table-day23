import "./global.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Card from "./components/Card";
function App() {
  const details =[{
    planName :"Free",
    price:0,
    featuresAccessible:[{
      features:"Single User"
    },{
      features:"5GB Storage"
    },{
      features:"Unlimited Public Projects"
    },{
      features:"Community Access"
    }
  ],
  featuresNotaccessible:[{
    features:"Unlimited Private Projects"
  },{
    features:"Dedicated Phone Support"
  },{
    features:"Free Subdomain"
  },{
    features:"Monthly Status Reports"
  }]
},
  {
    planName :"Plus",
    price:9,
    featuresAccessible:[{
      features:"5 Users"
    },{
      features:"50GB Storage"
    },{
      features:"Unlimited Public Projects"
    },{
      features:"Community Access"
    },{
      features:"Unlimited Private Projects"
    },{
      features:"Dedicated Phone Support"
    },{
      features:"Free Subdomain"
    }
  ],
  featuresNotaccessible:[{
    features:"Monthly Status Reports"
  }]
},
{
    planName :"Pro",
    price:49,
    featuresAccessible:[{
      features:"Unlimited Users"
    },{
      features:"150GB Storage"
    },{
      features:"Unlimited Public Projects"
    },{
      features:"Community Access"
    },{
      features:"Unlimited Private Projects"
    },{
      features:"Dedicated Phone Support"
    },{
      features:"Unlimited Free Subdomain"
    },{
      features:"Monthly Status Reports"
    }
  ],
  featuresNotaccessible:[]
  }];

  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {details.map((card)=>{
          return <Card card={card}></Card>;
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
