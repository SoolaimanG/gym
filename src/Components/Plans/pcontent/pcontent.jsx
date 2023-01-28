import "./pcontent.css";

const Pcontent = () => {
  const plans = [
    {
      id: 1,
      head: "Silver Package",
      ptag: "This package is perfect for beginners who needs constant help",
      money: "$29.99",
      moneySpan: "/mo",
      list1: "Features",
      list2: "First Features",
      list3: "Second Features",
      list5: "Third Features",
      list6: "Fifth Features",
      list7: "Sixth Features",
      list8: "Seventh Features",
      list9: "Eighth Features",
      list10: "Ninth Features",
      list11: "Tenth Features",
      list12: "Eleventh Features",
      cta: "Choose Plan",
    },
    {
      id: 2,
      head: "Gold Package",
      ptag: "This package is perfect for beginners who knows what they are doing",
      money: "$49.99",
      moneySpan: "/mo",
      list1: "Features",
      list2: "First Features",
      list3: "Second Features",
      list5: "Third Features",
      list6: "Fifth Features",
      list7: "Sixth Features",
      list8: "Seventh Features",
      list9: "Eighth Features",
      list10: "Ninth Features",
      list11: "Tenth Features",
      list12: "Eleventh Features",
      cta: "Choose Plan",
    },
    {
      id: 3,
      head: "Platinum Package",
      ptag: "This package is perfect for busy people who needs home service",
      money: "$89.99",
      moneySpan: "/mo",
      list1: "Features",
      list2: "First Features",
      list3: "Second Features",
      list5: "Third Features",
      list6: "Fifth Features",
      list7: "Sixth Features",
      list8: "Seventh Features",
      list9: "Eighth Features",
      list10: "Ninth Features",
      list11: "Tenth Features",
      list12: "Eleventh Features",
      cta: "Choose Plan",
    },
  ];
  return (
    <section className="container">
      <div className="plan__one">
        {plans.map((plan) => {
          return (
            <article className="plan__two" key={plan.id}>
              <h3>{plan.head}</h3>
              <span>{plan.ptag}</span>
              <h2>
                {plan.money} <span>{plan.moneySpan}</span>
              </h2>
              <ul>
                <li>{plan.list1}</li>
                <li>{plan.list2}</li>
                <li>{plan.list3}</li>
                <li>{plan.list5}</li>
                <li>{plan.list6}</li>
                <li>{plan.list7}</li>
                <li>{plan.list8}</li>
                <li>{plan.list9}</li>
                <li>{plan.list10}</li>
                <li>{plan.list11}</li>
              </ul>
              <div className="plan__three">
                <a className="btn plan_btn" href="">
                  {plan.cta}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Pcontent;
