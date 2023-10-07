cmake_minimum_required(VERSION 3.27)
set(CMAKE_CXX_STANDARD 17)
project(test)

set(target silver3/15353)

add_executable(test ${target}.cpp)