# get the avrage maks 
# first get the input and aks forthe marks 
def input_marks():
    marks = []
    subject = ["english","Hindi","Math","CP","Business"]

    for i in subject:
        mark =int(input(f"Enter the marks for {i}: "))
        marks.append(mark)   
    return marks
# calculate the average
def avaregeMarks(m):
    average = sum(m)/len(m)
    return average
 

def grade(marks):
    if marks >=90 :
        return "A+"
    elif marks >=80:
        return "A"
    elif marks >=70:
        return "B"

    elif marks >=60: 
        return "C"
    elif marks >=50: 
        return "D"
    else:
        return "F"
                            
marksObtained = input_marks()
average = avaregeMarks(marksObtained)
gradeObtained = grade(average)
print (f"You havce scorde {average} and u got {gradeObtained}" )
