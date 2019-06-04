describe("password checker", () => {
  it("should check password is longer than 8 characters", () => {
    expect(() => {password_is_valid("laerS1")}).toThrow(new Error("password must be longer than 8"));
    });

  it("should check password is not null", () => {
    expect(() => {password_is_valid("")}).toThrow(new Error("password must not be null"));
    })

  it("should check password has atleast 1 uppercase letter", () => {
    expect(() => {password_is_valid("swafgrt")}).toThrow(new Error("password must have atleast 1 uppercase letter"));
    })

  it("should check password has atleast 1 lowercase", () => {
    expect(() => {password_is_valid("SJDIEURY")}).toThrow(new Error("password must have atleast 1 lowercase letter"));
    })

  it("should check password has atleast 1 number", () => {
    expect(() => {password_is_valid("lKshfhr")}).toThrow(new Error("password must have atleast 1 number"));
    })

  it("should return TRUE if password meets atleast three criteria, otherwise return FALSE", () => {
    expect(password_is_ok("sephulaerS1")).toBe(true);
  })
  });