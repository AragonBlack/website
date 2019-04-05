import React from 'react'
import '../styles/glitch.less'

export default class Glitch extends React.Component {
  render() {
    return (
      <div className="glitch-wrapper">
        <h2 className='glitch' data-text={this.props.children}>{ this.props.children }</h2>
      </div>
    )
  }
}


// const TextGlitch = ({ wrapperStyles = {}, textStyles = {}, letter = false, as = 'p', children }) => {
//   if (!letter) {
//     return (
//       <div className='glitch-wrapper' style={wrapperStyles}>
//         <span className='glitch' style={ textStyles } data-text={children} role={as}>{ children }</span>
//       </div>
//     )
//   }
//
//   const letters = children.split('');
//
//   return (
//     <div className='glitch-wrapper' style={wrapperStyles} role={as}>
//       {
//         letters.map(l => (
//           l === ' '
//             ? <span className='glitch-letter' style={ textStyles }>&nbsp;</span>
//             : (
//               <div className='glitch-wrapper'>
//                 <span className='glitch-letter' style={ textStyles } data-text={l}>{ l }</span>
//               </div>
//             )
//         ))
//       }
//     </div>
//   );
// };
//
// export default TextGlitch
