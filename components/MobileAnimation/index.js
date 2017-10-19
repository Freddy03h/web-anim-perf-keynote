import React from "react";

import css from './index.css'


class MobileAnimation extends React.Component {
  state = {
    step: 0,
  }

  addStep = () => {
    const nextStep = this.state.step + 1
    this.setState({
      step: nextStep > 7 ? 1 : nextStep,
    })
  }

  render () {
    const { step } = this.state
    let classNameMobile = ''

    if(step >= 1) classNameMobile += 'step1 '
    if(step >= 2) classNameMobile += 'step2 '
    if(step >= 3) classNameMobile += 'step3 '
    if(step >= 4) classNameMobile += 'step4 '
    if(step >= 5) classNameMobile += 'step5 '
    if(step >= 6) classNameMobile += 'step6 '

    return (
      <div style={{transformStyle: 'preserve-3d'}}>
        <div id="mobile" className={classNameMobile}>

          <div id="mobile-background"></div>

          <div id="mobile-header">
            <div id="mobile-header-title">
              AppName
            </div>
          </div>

          <div id="mobile-content">
            <div id="mobile-content-title">Title</div>
            <div id="mobile-content-detail">December 1, 2016</div>
            <div id="mobile-content-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec purus ante. Maecenas a dui bibendum enim tincidunt bibendum. Aenean fermentum, nunc ac dignissim efficitur, lorem arcu eleifend mauris, ac accumsan leo arcu eget lorem. Proin nec elementum libero.</p>
              <p>Vivamus tempus neque a tellus euismod volutpat. Quisque efficitur mauris urna. Suspendisse mollis facilisis convallis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec purus ante. Maecenas a dui bibendum enim tincidunt bibendum. Aenean fermentum, nunc ac dignissim efficitur, lorem arcu eleifend mauris, ac accumsan leo arcu eget lorem. Proin nec elementum libero.</p>
              <p>Vivamus tempus neque a tellus euismod volutpat. Quisque efficitur mauris urna. Suspendisse mollis facilisis convallis.</p>

            </div>
          </div>

        </div>

        <div style={{transform: 'translateY(100px)', textAlign: 'right'}}>
          <button
            style={{backgroundColor: '#FFFFFF', border: 'solid #D8D8D8 1px', borderRadius: 3, boxShadow: '0 1px 1px rgba(0, 0, 0, .2)', color: '#555555', fontSize: '0.4em'}}
            onClick={this.addStep}
          >
            Next Step
          </button>
        </div>
      </div>
    )
  }
}


export default MobileAnimation