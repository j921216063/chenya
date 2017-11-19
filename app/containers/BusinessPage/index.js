import React from 'react';
import Helmet from 'react-helmet';
import LargeWindSection from 'components/LargeWindSection';
import TTWindSection from 'components/TTWindSection';
import GreenEnergySection from 'components/GreenEnergySection';
import HybridSystemSection from 'components/HybridSystemSection';


export default class BusinessPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet
          title="Business Item"
          meta={[
            { name: 'description', content: 'Business Item' },
          ]}
        />
        <LargeWindSection />
        <TTWindSection />
        <GreenEnergySection />
        <HybridSystemSection />
      </div>
    );
  }
}
