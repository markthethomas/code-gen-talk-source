// Code generated by protoc-gen-go. DO NOT EDIT.
// source: rpc/nearby/nearby.proto

package nearby

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

type NearbyRequest struct {
	Lat                  float32  `protobuf:"fixed32,1,opt,name=lat,proto3" json:"lat,omitempty"`
	Lng                  float32  `protobuf:"fixed32,2,opt,name=lng,proto3" json:"lng,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *NearbyRequest) Reset()         { *m = NearbyRequest{} }
func (m *NearbyRequest) String() string { return proto.CompactTextString(m) }
func (*NearbyRequest) ProtoMessage()    {}
func (*NearbyRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_b4b6013d2c6e1c1f, []int{0}
}

func (m *NearbyRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_NearbyRequest.Unmarshal(m, b)
}
func (m *NearbyRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_NearbyRequest.Marshal(b, m, deterministic)
}
func (m *NearbyRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NearbyRequest.Merge(m, src)
}
func (m *NearbyRequest) XXX_Size() int {
	return xxx_messageInfo_NearbyRequest.Size(m)
}
func (m *NearbyRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_NearbyRequest.DiscardUnknown(m)
}

var xxx_messageInfo_NearbyRequest proto.InternalMessageInfo

func (m *NearbyRequest) GetLat() float32 {
	if m != nil {
		return m.Lat
	}
	return 0
}

func (m *NearbyRequest) GetLng() float32 {
	if m != nil {
		return m.Lng
	}
	return 0
}

type NearbyReply struct {
	Ids                  []string `protobuf:"bytes,1,rep,name=ids,proto3" json:"ids,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *NearbyReply) Reset()         { *m = NearbyReply{} }
func (m *NearbyReply) String() string { return proto.CompactTextString(m) }
func (*NearbyReply) ProtoMessage()    {}
func (*NearbyReply) Descriptor() ([]byte, []int) {
	return fileDescriptor_b4b6013d2c6e1c1f, []int{1}
}

func (m *NearbyReply) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_NearbyReply.Unmarshal(m, b)
}
func (m *NearbyReply) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_NearbyReply.Marshal(b, m, deterministic)
}
func (m *NearbyReply) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NearbyReply.Merge(m, src)
}
func (m *NearbyReply) XXX_Size() int {
	return xxx_messageInfo_NearbyReply.Size(m)
}
func (m *NearbyReply) XXX_DiscardUnknown() {
	xxx_messageInfo_NearbyReply.DiscardUnknown(m)
}

var xxx_messageInfo_NearbyReply proto.InternalMessageInfo

func (m *NearbyReply) GetIds() []string {
	if m != nil {
		return m.Ids
	}
	return nil
}

type UpdateLocationRequest struct {
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Lat                  float32  `protobuf:"fixed32,2,opt,name=lat,proto3" json:"lat,omitempty"`
	Lng                  float32  `protobuf:"fixed32,3,opt,name=lng,proto3" json:"lng,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UpdateLocationRequest) Reset()         { *m = UpdateLocationRequest{} }
func (m *UpdateLocationRequest) String() string { return proto.CompactTextString(m) }
func (*UpdateLocationRequest) ProtoMessage()    {}
func (*UpdateLocationRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_b4b6013d2c6e1c1f, []int{2}
}

func (m *UpdateLocationRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UpdateLocationRequest.Unmarshal(m, b)
}
func (m *UpdateLocationRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UpdateLocationRequest.Marshal(b, m, deterministic)
}
func (m *UpdateLocationRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UpdateLocationRequest.Merge(m, src)
}
func (m *UpdateLocationRequest) XXX_Size() int {
	return xxx_messageInfo_UpdateLocationRequest.Size(m)
}
func (m *UpdateLocationRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_UpdateLocationRequest.DiscardUnknown(m)
}

var xxx_messageInfo_UpdateLocationRequest proto.InternalMessageInfo

func (m *UpdateLocationRequest) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *UpdateLocationRequest) GetLat() float32 {
	if m != nil {
		return m.Lat
	}
	return 0
}

func (m *UpdateLocationRequest) GetLng() float32 {
	if m != nil {
		return m.Lng
	}
	return 0
}

type UpdateLocationReply struct {
	Success              bool     `protobuf:"varint,1,opt,name=success,proto3" json:"success,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UpdateLocationReply) Reset()         { *m = UpdateLocationReply{} }
func (m *UpdateLocationReply) String() string { return proto.CompactTextString(m) }
func (*UpdateLocationReply) ProtoMessage()    {}
func (*UpdateLocationReply) Descriptor() ([]byte, []int) {
	return fileDescriptor_b4b6013d2c6e1c1f, []int{3}
}

func (m *UpdateLocationReply) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UpdateLocationReply.Unmarshal(m, b)
}
func (m *UpdateLocationReply) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UpdateLocationReply.Marshal(b, m, deterministic)
}
func (m *UpdateLocationReply) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UpdateLocationReply.Merge(m, src)
}
func (m *UpdateLocationReply) XXX_Size() int {
	return xxx_messageInfo_UpdateLocationReply.Size(m)
}
func (m *UpdateLocationReply) XXX_DiscardUnknown() {
	xxx_messageInfo_UpdateLocationReply.DiscardUnknown(m)
}

var xxx_messageInfo_UpdateLocationReply proto.InternalMessageInfo

func (m *UpdateLocationReply) GetSuccess() bool {
	if m != nil {
		return m.Success
	}
	return false
}

func init() {
	proto.RegisterType((*NearbyRequest)(nil), "floqars.services.nearby.NearbyRequest")
	proto.RegisterType((*NearbyReply)(nil), "floqars.services.nearby.NearbyReply")
	proto.RegisterType((*UpdateLocationRequest)(nil), "floqars.services.nearby.UpdateLocationRequest")
	proto.RegisterType((*UpdateLocationReply)(nil), "floqars.services.nearby.UpdateLocationReply")
}

func init() { proto.RegisterFile("rpc/nearby/nearby.proto", fileDescriptor_b4b6013d2c6e1c1f) }

var fileDescriptor_b4b6013d2c6e1c1f = []byte{
	// 253 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x2f, 0x2a, 0x48, 0xd6,
	0xcf, 0x4b, 0x4d, 0x2c, 0x4a, 0xaa, 0x84, 0x52, 0x7a, 0x05, 0x45, 0xf9, 0x25, 0xf9, 0x42, 0xe2,
	0x69, 0x39, 0xf9, 0x85, 0x89, 0x45, 0xc5, 0x7a, 0xc5, 0xa9, 0x45, 0x65, 0x99, 0xc9, 0xa9, 0xc5,
	0x7a, 0x10, 0x69, 0x25, 0x63, 0x2e, 0x5e, 0x3f, 0x30, 0x2b, 0x28, 0xb5, 0xb0, 0x34, 0xb5, 0xb8,
	0x44, 0x48, 0x80, 0x8b, 0x39, 0x27, 0xb1, 0x44, 0x82, 0x51, 0x81, 0x51, 0x83, 0x29, 0x08, 0xc4,
	0x04, 0x8b, 0xe4, 0xa5, 0x4b, 0x30, 0x41, 0x45, 0xf2, 0xd2, 0x95, 0xe4, 0xb9, 0xb8, 0x61, 0x9a,
	0x0a, 0x72, 0x2a, 0x41, 0x0a, 0x32, 0x53, 0x8a, 0x25, 0x18, 0x15, 0x98, 0x35, 0x38, 0x83, 0x40,
	0x4c, 0x25, 0x6f, 0x2e, 0xd1, 0xd0, 0x82, 0x94, 0xc4, 0x92, 0x54, 0x9f, 0xfc, 0xe4, 0xc4, 0x92,
	0xcc, 0xfc, 0x3c, 0x98, 0xe9, 0x7c, 0x5c, 0x4c, 0x99, 0x29, 0x60, 0xc3, 0x39, 0x83, 0x98, 0x32,
	0x53, 0x60, 0xb6, 0x31, 0x61, 0xd8, 0xc6, 0x8c, 0xb0, 0x4d, 0x9f, 0x4b, 0x18, 0xdd, 0x30, 0x90,
	0xad, 0x12, 0x5c, 0xec, 0xc5, 0xa5, 0xc9, 0xc9, 0xa9, 0xc5, 0xc5, 0x60, 0xf3, 0x38, 0x82, 0x60,
	0x5c, 0xa3, 0x2b, 0x8c, 0x5c, 0x6c, 0x10, 0xf7, 0x09, 0x45, 0x71, 0x71, 0xb9, 0x65, 0xe6, 0xa5,
	0x40, 0x79, 0x6a, 0x7a, 0x38, 0x82, 0x41, 0x0f, 0x25, 0x0c, 0xa4, 0x54, 0x08, 0xaa, 0x03, 0x39,
	0x20, 0x8f, 0x8b, 0x0f, 0xd5, 0x5d, 0x42, 0x7a, 0x38, 0xf5, 0x61, 0x0d, 0x0d, 0x29, 0x1d, 0xa2,
	0xd5, 0x17, 0xe4, 0x54, 0x3a, 0x71, 0x44, 0xb1, 0x41, 0x64, 0x93, 0xd8, 0xc0, 0x91, 0x6a, 0x0c,
	0x08, 0x00, 0x00, 0xff, 0xff, 0xd4, 0x86, 0xe5, 0x29, 0xef, 0x01, 0x00, 0x00,
}
