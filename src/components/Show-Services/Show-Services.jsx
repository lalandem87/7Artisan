import "./Show-Services.scss";
import data from "../../../backend/data.json";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const services = data["services"];

export function ShowServices() {
  return (
    <section className="services">
      <div className="container-card">
        {services.map((service) => {
          return (
            <div
              className={`card-service ${service.id % 2 !== 0 ? "reverse" : ""}`}
              id={service.id}
              key={service.id}
            >
              <div className="left">
                <span
                  className="badge-card"
                  style={{
                    color: service.badge.color,
                    background: service.badge.backcolor,
                  }}
                >
                  {service.badge.name}
                </span>
                <h2 className="title">{service.name}</h2>
                <p className="desc">{service.desc}</p>
                <ul>
                  {service.lists.list.map((item, id) => {
                    return (
                      <li
                        style={{ background: service.lists.backcolor }}
                        key={id}
                      >
                        <Check style={{ color: service.badge.color }} />
                        {item}
                      </li>
                    );
                  })}
                </ul>
                <Link to="/contact">
                  En savoir plus <ArrowRight />
                </Link>
              </div>
              <div className="right">
                <div className="img-container">
                  <img src={service["image-url"]} alt={service.name} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
