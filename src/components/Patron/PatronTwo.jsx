import React from 'react';
import s from '../Patron/PatronTwo.module.css';

export const PatronTwo = () => {
  return (
    <div>
      <div className={s.dog}>
        <div className="dog-body">
          <div className="dog-tail">
            <div className="dog-tail">
              <div className="dog-tail">
                <div className="dog-tail">
                  <div className="dog-tail">
                    <div className="dog-tail">
                      <div className="dog-tail">
                        <div className="dog-tail"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dog-torso"></div>
        <div className="dog-head">
          <div className="dog-ears">
            <div className="dog-ear"></div>
            <div className="dog-ear"></div>
          </div>
          <div className="dog-eyes">
            <div className="dog-eye"></div>
            <div className="dog-eye"></div>
          </div>
          <div className="dog-muzzle">
            <div className="dog-tongue"></div>
          </div>
        </div>
      </div>

      <div className="ball" tabindex="0"></div>
    </div>
  );
};
