window
  .fetch("https://api.covid19api.com/summary")
  .then((data) => {
    data
      .json()
      .then((covid) => {
        console.log(covid.Global);
        let Global = covid.Global;
        document.getElementById('covidBlock').innerHTML = `
        <section>
        <div>
             <h4><span class="badge badge-danger">TotalConfirmed</span>
             <span>${Global.TotalConfirmed}</span>
             </h4>
             </div>
             <div>
             <h4><span class="badge badge-danger">TotalDeaths</span>
             <span>${Global.TotalDeaths}</span>
             </h4>
             </div>
             <div>

             <h4><span class="badge badge-danger">NewConfirmed</span>
              <span>${Global.NewConfirmed}</span>
            </h4>
            </div>
            <div>
             <h4><span class="badge badge-danger">NewDeaths</span>
             <span>${Global.NewDeaths}</span>
             </h4>
             </div>
             <div>
             <h4><span class="badge badge-success">NewRecovered</span>
             <span>${Global.NewRecovered}</span>
             </h4>
             </div>
             <div>
             <h4><span class="badge badge-success">TotalRecovered</span>
             <span>${Global.TotalRecovered}</span>
             </h4>
             </div>
          </section>
           
          `;
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));