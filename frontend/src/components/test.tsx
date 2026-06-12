  <div className="relative w-full lg:w-1/2">
          <div className="relative">
            {/* Main speech bubble shape */}
            <div className="relative w-[400px] h-[400px] mx-auto">
              {/* Large circular image */}
              <div className="absolute inset-0 rounded-full bg-white p-3">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/images/Ellipse 7.png"
                    alt="Mountain landscape with glacier and water"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Small circular image */}
              <div className="absolute bottom-0 right-0 w-[180px] h-[180px] rounded-full bg-white p-3">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/images/Ellipse 9.png"
                    alt="Group of hikers on a trek"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Speech bubble pointer */}
            <div className="absolute -bottom-8 right-20 w-16 h-16 bg-white transform rotate-45"></div>
           
          </div>
        </div>