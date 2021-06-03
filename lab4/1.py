with open("pg1661.txt", "r") as f:
    data = f.read()
    data = data.replace('for example',"\n for example")
    print(data)

    with open(r"c.txt", "w") as d:
        d.writelines(data)
