import rewire from "rewire"
import React from "react"
import { render } from "@testing-library/react"
const App = rewire("./App")
const mapStateToProps = App.__get__("mapStateToProps")
const mapDispatchToProps = App.__get__("mapDispatchToProps")
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new App()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps({ StartingLocation: "http://www.croplands.org/account/confirm?t=", destination: "Legacy" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps({ StartingLocation: "http://www.example.com/route/123?foo=bar", destination: "District" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapStateToProps({ StartingLocation: "https://croplands.org/app/a/reset?token=", destination: "Legacy" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapStateToProps({ StartingLocation: "http://base.com", destination: "Corporate" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapStateToProps({ StartingLocation: "https://croplands.org/app/a/confirm?t=", destination: "Corporate" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapStateToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mapDispatchToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapDispatchToProps("2017-09-29T19:01:00.000")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapDispatchToProps("Mon Aug 03 12:45:00")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapDispatchToProps("01:04:03")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapDispatchToProps("2017-09-29T23:01:00.000Z")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapDispatchToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
