import PropTypes from 'prop-types'
import { classNames } from '../../utils/classNames'

const Radio = ({ selected, label, value, onChange }) => {
  return (
    <div
      className="modern-radio-container"
      onClick={() => {
        onChange(value)
      }}
    >
      <div
        className={classNames(
          'radio-outer-circle', 
          value !== selected && 'unselected')
        }
      >
        <div
          className={classNames(
            'radio-inner-circle',
            value !== selected && 'unselected-circle',
          )}
        />
      </div>
      <div className="helper-text">{label}</div>
    </div>
  )
}

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
}

export default Radio
