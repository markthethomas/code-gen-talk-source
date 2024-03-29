// Code generated by protoc-gen-go. DO NOT EDIT.
// source: rpc/cars/cars.proto

package cars

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type CarRequest struct {
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *CarRequest) Reset()         { *m = CarRequest{} }
func (m *CarRequest) String() string { return proto.CompactTextString(m) }
func (*CarRequest) ProtoMessage()    {}
func (*CarRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_7b1e34e017554940, []int{0}
}

func (m *CarRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CarRequest.Unmarshal(m, b)
}
func (m *CarRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CarRequest.Marshal(b, m, deterministic)
}
func (m *CarRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CarRequest.Merge(m, src)
}
func (m *CarRequest) XXX_Size() int {
	return xxx_messageInfo_CarRequest.Size(m)
}
func (m *CarRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_CarRequest.DiscardUnknown(m)
}

var xxx_messageInfo_CarRequest proto.InternalMessageInfo

func (m *CarRequest) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

type CreateCarRequest struct {
	UserId               string   `protobuf:"bytes,1,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	Make                 string   `protobuf:"bytes,2,opt,name=make,proto3" json:"make,omitempty"`
	Model                string   `protobuf:"bytes,3,opt,name=model,proto3" json:"model,omitempty"`
	Year                 int64    `protobuf:"varint,4,opt,name=year,proto3" json:"year,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *CreateCarRequest) Reset()         { *m = CreateCarRequest{} }
func (m *CreateCarRequest) String() string { return proto.CompactTextString(m) }
func (*CreateCarRequest) ProtoMessage()    {}
func (*CreateCarRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_7b1e34e017554940, []int{1}
}

func (m *CreateCarRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateCarRequest.Unmarshal(m, b)
}
func (m *CreateCarRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateCarRequest.Marshal(b, m, deterministic)
}
func (m *CreateCarRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateCarRequest.Merge(m, src)
}
func (m *CreateCarRequest) XXX_Size() int {
	return xxx_messageInfo_CreateCarRequest.Size(m)
}
func (m *CreateCarRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateCarRequest.DiscardUnknown(m)
}

var xxx_messageInfo_CreateCarRequest proto.InternalMessageInfo

func (m *CreateCarRequest) GetUserId() string {
	if m != nil {
		return m.UserId
	}
	return ""
}

func (m *CreateCarRequest) GetMake() string {
	if m != nil {
		return m.Make
	}
	return ""
}

func (m *CreateCarRequest) GetModel() string {
	if m != nil {
		return m.Model
	}
	return ""
}

func (m *CreateCarRequest) GetYear() int64 {
	if m != nil {
		return m.Year
	}
	return 0
}

type Car struct {
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	UserId               string   `protobuf:"bytes,2,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	Make                 string   `protobuf:"bytes,3,opt,name=make,proto3" json:"make,omitempty"`
	Model                string   `protobuf:"bytes,4,opt,name=model,proto3" json:"model,omitempty"`
	Year                 int64    `protobuf:"varint,5,opt,name=year,proto3" json:"year,omitempty"`
	Lat                  int64    `protobuf:"varint,6,opt,name=lat,proto3" json:"lat,omitempty"`
	Lng                  int64    `protobuf:"varint,7,opt,name=lng,proto3" json:"lng,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Car) Reset()         { *m = Car{} }
func (m *Car) String() string { return proto.CompactTextString(m) }
func (*Car) ProtoMessage()    {}
func (*Car) Descriptor() ([]byte, []int) {
	return fileDescriptor_7b1e34e017554940, []int{2}
}

func (m *Car) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Car.Unmarshal(m, b)
}
func (m *Car) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Car.Marshal(b, m, deterministic)
}
func (m *Car) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Car.Merge(m, src)
}
func (m *Car) XXX_Size() int {
	return xxx_messageInfo_Car.Size(m)
}
func (m *Car) XXX_DiscardUnknown() {
	xxx_messageInfo_Car.DiscardUnknown(m)
}

var xxx_messageInfo_Car proto.InternalMessageInfo

func (m *Car) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *Car) GetUserId() string {
	if m != nil {
		return m.UserId
	}
	return ""
}

func (m *Car) GetMake() string {
	if m != nil {
		return m.Make
	}
	return ""
}

func (m *Car) GetModel() string {
	if m != nil {
		return m.Model
	}
	return ""
}

func (m *Car) GetYear() int64 {
	if m != nil {
		return m.Year
	}
	return 0
}

func (m *Car) GetLat() int64 {
	if m != nil {
		return m.Lat
	}
	return 0
}

func (m *Car) GetLng() int64 {
	if m != nil {
		return m.Lng
	}
	return 0
}

func init() {
	proto.RegisterType((*CarRequest)(nil), "floqars.services.cars.CarRequest")
	proto.RegisterType((*CreateCarRequest)(nil), "floqars.services.cars.CreateCarRequest")
	proto.RegisterType((*Car)(nil), "floqars.services.cars.Car")
}

func init() { proto.RegisterFile("rpc/cars/cars.proto", fileDescriptor_7b1e34e017554940) }

var fileDescriptor_7b1e34e017554940 = []byte{
	// 263 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x91, 0xc1, 0x4a, 0x03, 0x31,
	0x10, 0x86, 0xc9, 0x26, 0x4d, 0xe9, 0x1c, 0xa4, 0x8c, 0x8a, 0xa1, 0x78, 0xa8, 0x7b, 0xb1, 0xa7,
	0x15, 0xf4, 0x0d, 0xdc, 0x43, 0xf1, 0x26, 0x7b, 0xf4, 0x22, 0x71, 0x77, 0x2c, 0x8b, 0xdb, 0x6e,
	0x3b, 0x49, 0x05, 0xdf, 0xc2, 0x57, 0xf0, 0x4d, 0x25, 0x51, 0xda, 0x52, 0x76, 0x7b, 0x09, 0xff,
	0xfc, 0xf9, 0xc9, 0x37, 0xfc, 0x81, 0x73, 0x5e, 0x97, 0x77, 0xa5, 0x65, 0x17, 0x8f, 0x6c, 0xcd,
	0xad, 0x6f, 0xf1, 0xf2, 0xbd, 0x69, 0x37, 0x61, 0x74, 0xc4, 0x9f, 0x75, 0x49, 0x2e, 0x0b, 0x97,
	0xe9, 0x35, 0x40, 0x6e, 0xb9, 0xa0, 0xcd, 0x96, 0x9c, 0xc7, 0x33, 0x48, 0xea, 0xca, 0x88, 0xa9,
	0x98, 0x8d, 0x8a, 0xa4, 0xae, 0xd2, 0x1a, 0xc6, 0x39, 0x93, 0xf5, 0x74, 0x90, 0xb9, 0x82, 0xe1,
	0xd6, 0x11, 0xbf, 0xee, 0x82, 0x3a, 0x8c, 0x4f, 0x15, 0x22, 0xa8, 0xa5, 0xfd, 0x20, 0x93, 0x44,
	0x37, 0x6a, 0xbc, 0x80, 0xc1, 0xb2, 0xad, 0xa8, 0x31, 0x32, 0x9a, 0x7f, 0x43, 0x48, 0x7e, 0x91,
	0x65, 0xa3, 0xa6, 0x62, 0x26, 0x8b, 0xa8, 0xd3, 0x6f, 0x01, 0x32, 0xb7, 0x7c, 0xbc, 0xc2, 0x21,
	0x2e, 0xe9, 0xc4, 0xc9, 0x2e, 0x9c, 0xea, 0xc2, 0x0d, 0xf6, 0x38, 0x1c, 0x83, 0x6c, 0xac, 0x37,
	0x3a, 0x5a, 0x41, 0x46, 0x67, 0xb5, 0x30, 0xc3, 0x7f, 0x67, 0xb5, 0xb8, 0xff, 0x11, 0xa0, 0x72,
	0xcb, 0x0e, 0xe7, 0xa0, 0xe7, 0xe4, 0xc3, 0x76, 0x37, 0x59, 0x67, 0x8d, 0xd9, 0xbe, 0x9f, 0xc9,
	0xa4, 0x3f, 0x82, 0xcf, 0x30, 0xda, 0xf5, 0x89, 0xb7, 0x7d, 0xc1, 0xa3, 0xc6, 0x4f, 0xbd, 0xf8,
	0xa8, 0x5f, 0x54, 0xd0, 0x6f, 0x3a, 0xfe, 0xf2, 0xc3, 0x6f, 0x00, 0x00, 0x00, 0xff, 0xff, 0x80,
	0x78, 0x83, 0x05, 0xfc, 0x01, 0x00, 0x00,
}
