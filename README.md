# my_freelance_projects

1- create branch for a procject name it with his own name and be in main brnach
2- checkout on it and fist be in main to not put all the code to not spesic project

@show branch name
#create new branch
$ git branch `<name>`
#list all branches
$ git branch -a -v
#Return all branches that has not merged
$ git branch --no-merged
#Return all branches thaat has merged
$ git branch --merged
#to merg branch with main branch but frist you should in main branch
$ git merge branch_name

# Switch to an existing branch frist you should commit the changes in the curent branch befor go to the the other:

$ git checkout `<branch-name>`
#Create and switch to a new branch
$ git checkout -b `<branch-name>`

# to delete brnach

$ git branch -d `<name>` or git branch -D deidine #this for froce delete

git clone -b branch https://github.com/deidine/my_freelance_projects.git
