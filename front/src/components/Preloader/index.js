import React from 'react';

import './style.css';

const Spinner = ({visible = true, spinnerColor = '#333333', spinnerWidth = 5, size = 40, ...rest}) =>
    !visible
        ? null
        : (
            <div className={'spinner-container'}>
                <div className={'spinner-wrapper'}>
                    <div
                        {...rest}
                        className="spinner"
                        style={{
                            width: size,
                            height: size,
                            borderColor: spinnerColor,
                            borderWidth: spinnerWidth,
                        }}
                    />
                </div>
            </div>
        );

export default Spinner;
