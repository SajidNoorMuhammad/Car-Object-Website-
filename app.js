var carCompanies = {
    Toyota: {
        models: ["Corolla", "Fortuner", "Crysta"],
        details: {
            Corolla: {
                Name: "Toyota Corolla",
                Model: "2021",
                Seats: "5",
                Developed: "1966",
                Introduced: "America",
            },
            Fortuner: {
                Name: "Toyota Fortuner",
                Model: "2024",
                Seats: "7",
                Developed: "2004",
                Introduced: "Japanese",
                Image: ``
            },
            Crysta: {
                Name: "",
                Model: "",
                Seats: "",
                Developed: "",
                Introduced: "",
            }
        }
    },
    Honda: {
        models: ["Civic", "Accord", "City"],
        details: {
            Civic: {
                Name: "Honda Civic",
                Model: "2023",
                Seats: "5",
                Developed: "1972",
                Introduced: "Japan",
            },
            Accord: {
                Name: "Honda Accord",
                Model: "2021",
                Seats: "5",
                Developed: "1982",
                Introduced: "Japan/USA",
            },
            City: {
                Name: "Honda City",
                Model: "2024",
                Seats: "5",
                Developed: "1981",
                Introduced: "Japan",
            }
        }
    },
    Ford: {
        models: ["Mustang", "Fiesta", "Aspire"],
        details: {
            Mustang: {
                Name: "Ford Mustang",
                Model: "2024",
                Seats: "4",
                Developed: "1964",
                Introduced: "America",
            },
            Fiesta: {
                Name: "Ford Fiesta",
                Model: "2021",
                Seats: "5",
                Developed: "1972",
                Introduced: "Valencia Spain",
            },
            Aspire: {
                Name: "Ford Aspire",
                Model: "2019",
                Seats: "5",
                Developed: "1994",
                Introduced: "North America",
            }
        }
    },
    Suzuki: {
        models: ["Cultus", "Swift", "Mehran"],
        details: {
            Cultus: {
                Name: "Suzuki Cultus VXL",
                Model: "2022",
                Seats: "5",
                Developed: "1983",
                Introduced: "Japanese",
            },
            Swift: {
                Name: "Suzuki Swift DLX",
                Model: "2023",
                Seats: "5",
                Developed: "2016",
                Introduced: "India",
            },
            Mehran: {
                Name: "Suzuki Mehran",
                Model: "2023",
                Seats: "5",
                Developed: "1988",
                Introduced: "Pakistan",
            }
        }
    },
    Kia: {
        models: ["EV6", "Stonic", "Rio"],
        details: {
            EV6: {
                Name: "Kia EV6",
                Model: "2023",
                Seats: "5",
                Developed: "2021",
                Introduced: "South Korea",
            },
            Stonic: {
                Name: "Kia Stonic",
                Model: "2022",
                Seats: "5",
                Developed: "2017",
                Introduced: "South Korea",
            },
            Rio: {
                Name: "Kia Rio",
                Model: "2023",
                Seats: "5",
                Developed: "1999",
                Introduced: "South Korea",
            }
        }
    },
    Nissan: {
        models: ["Altima", "Murano", "Sentra"],
        details: {
            Altima: {
                Name: "Nissan Altima",
                Model: "2022",
                Seats: "5",
                Developed: "1992",
                Introduced: "United States",
            },
            Murano: {
                Name: "Nissan Murano",
                Model: "2020",
                Seats: "5",
                Developed: "2002",
                Introduced: "Japan",
            },
            Sentra: {
                Name: "Nissan Sentra",
                Model: "2021",
                Seats: "5",
                Developed: "1982",
                Introduced: "Japan",
            }
        }
    },
    Hyundai: {
        models: ["Santa_Fe", "Tucson", "i20"],
        details: {
            Santa_Fe: {
                Name: "Hyundai Santa_Fe",
                Model: "2024",
                Seats: "7",
                Developed: "2000",
                Introduced: "South Korean",
            },
            Tucson: {
                Name: "Hyundai Tuscon",
                Model: "2022",
                Seats: "5",
                Developed: "2004",
                Introduced: "Japan",
            },
            i20: {
                Name: "Hyundai i20",
                Model: "2023",
                Seats: "5",
                Developed: "2008",
                Introduced: "India",
            }
        }
    }
};

var companySelect = document.getElementById("car-company");
var modelSelect = document.getElementById("car-model");
var detailsDiv = document.getElementById("car-details");

companySelect.addEventListener("change", function (e) {
    var companyName = e.target.value;
    var models = carCompanies[companyName].models;
    var html = models.map((model) => {
        return `<option value="${model}">${model}</option>`;
    }).join("");
    modelSelect.innerHTML = html;
});

modelSelect.addEventListener("change", function (e) {
    var companyName = companySelect.value;
    var modelName = e.target.value;
    var details = carCompanies[companyName].details[modelName];
    var html = `<div class="col">
<h2 class="modelname">${modelName}</h2>
<p class="det">Name: ${details.Name}</p>
<p class="det">Model: ${details.Model}</p>
<p class="det">Seat: ${details.Seats}</p>
<p class="det">Developed: ${details.Developed}</p>
<p class="det">Introduced: ${details.Introduced}</p>
</div>
`;
    detailsDiv.innerHTML = html;
});

function scrollToBottom(){
    window.scrollTo(0,document.body.scrollHeight);
}

document.addEventListener('contextmenu',
    event => event.preventDefault()
)
    document.onkeydown = function(e) {
        if ((e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 123)){
            alert('Not Allowed Due to Privacy!');
        }
        return false;
};
