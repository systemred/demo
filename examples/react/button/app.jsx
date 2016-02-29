var MyPage  = React.createClass({
  render: function() {
    return (
    <OnsPage>
<ons-toolbar>
      <div className="center">Button</div>
    </ons-toolbar>

    <section style={{padding: 8}}>
      <p></p>
      <h3>Material design buttons</h3>
      <ons-button modifier="material">
        <ons-ripple></ons-ripple>
        button with ripple
      </ons-button>
      <ons-button modifier="material">button</ons-button>
      <ons-button modifier="material" disabled>disabled</ons-button>
      <ons-button modifier="material--flat">
        <ons-ripple color="rgba(66, 130, 204, 0.2)"></ons-ripple>
        flat with ripple
      </ons-button>
      <ons-button modifier="material--flat">flat</ons-button>
      <ons-button modifier="material--flat" disabled>flat disabled</ons-button>
    </section>
    <section style={{padding: 8}}>
      <h3>iOS buttons</h3>

      <button> Ilia </button> {' '}
      <button> Ilia </button> 
      <button> Ilia </button>
      <ons-button modifier="light">light</ons-button>
      <ons-button modifier="light">light</ons-button>
      <ons-button modifier="outline">outline</ons-button>
      <ons-button modifier="quiet">quiet</ons-button>
      <ons-button>Default</ons-button>
      <ons-button modifier="cta">cta</ons-button>
      <p></p>
      <ons-button modifier="large--quiet">large--quiet</ons-button>
      <p></p>
      <ons-button modifier="large">large</ons-button>
      <p></p>
      <ons-button modifier="large--cta">large--cta</ons-button>
    </section>

    <section style={{padding: 8}}>
      <p></p><br /><br />
      <ons-button modifier="light" disabled="true">light</ons-button>
      <ons-button modifier="outline" disabled="true">outline</ons-button>
      <ons-button modifier="quiet" disabled="true">quiet</ons-button>
      <ons-button disabled="true">Default</ons-button>
      <ons-button modifier="cta" disabled="true">cta</ons-button>
      <p></p>
      <ons-button modifier="large--quiet" disabled="true">large--quiet</ons-button>
      <p></p>
      <ons-button modifier="large" disabled="true">large</ons-button>
      <p></p>
      <ons-button modifier="large--cta" disabled="true">large--cta</ons-button>
    </section>

    </OnsPage>);
  }
});

ReactDOM.render(<MyPage />, document.getElementById('app'));