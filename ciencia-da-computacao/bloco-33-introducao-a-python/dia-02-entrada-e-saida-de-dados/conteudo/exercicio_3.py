with open("students.txt", mode="r") as students_file:
    data_to_keep = []

    for line in students_file:
        student, note = line.split()

        if int(note) < 6:
            data_to_keep.append(student)

with open("failed_students.txt", mode="w") as failed_students_file:
    for student in data_to_keep:
        print(student, file=failed_students_file)
