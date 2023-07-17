def przen():
    lines = []
    while True:
        try:
            lines.append(".restrict("+input()+")")
        except:
            break
    for i in range(len(lines)):
        print(lines[i])

przen()